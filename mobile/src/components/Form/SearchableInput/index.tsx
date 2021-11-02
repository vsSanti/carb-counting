import React, { useCallback, useMemo, useState } from 'react';
import { Modal } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { Input } from '@/components/Form/Input';
import { InputForm, InputFormProps } from '@/components/Form/InputForm';

import {
  Option,
  Container,
  Header,
  Icon,
  Label,
  Separator,
  Title,
  InputView,
} from './styles';

type Option = {
  label: string;
  value: string;
};

type Props = InputFormProps & {
  onCloseModal(props: Option): void;
  options: Option[];
};

export const SearchableInput: React.FC<Props> = ({
  onCloseModal,
  options,
  ...rest
}: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filterValue, setFilterValue] = useState<string>();

  const changeModalVisibility = useCallback(() => {
    setIsModalVisible((oldState) => {
      if (oldState) setFilterValue(undefined);
      return !oldState;
    });
  }, []);

  const filteredOptions = useMemo(() => {
    if (!filterValue) return options;

    const lowerCasedFilterValue = filterValue.toLowerCase();

    const result = options.filter((option) =>
      option.label.toLowerCase().includes(lowerCasedFilterValue)
    );

    return result;
  }, [filterValue, options]);

  return (
    <>
      <InputForm {...rest} onFocus={changeModalVisibility} />

      <Modal visible={isModalVisible} style={{ paddingTop: 50 }}>
        <Container>
          <Header>
            <TouchableOpacity onPress={changeModalVisibility}>
              <Icon name="x" />
            </TouchableOpacity>
            <Title>Categoria</Title>
            <Icon name="x" style={{ opacity: 0 }} />
          </Header>

          <InputView>
            <Input
              placeholder="filtro"
              placeholderTextColor="darkgray"
              autoCompleteType="off"
              onChangeText={setFilterValue}
            />
          </InputView>

          <FlatList
            data={filteredOptions}
            style={{ flex: 1, width: '100%' }}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <Option
                onPress={() => {
                  onCloseModal(item);
                  changeModalVisibility();
                }}
              >
                <Label>{item.label}</Label>
              </Option>
            )}
            ItemSeparatorComponent={() => <Separator />}
          />
        </Container>
      </Modal>
    </>
  );
};
