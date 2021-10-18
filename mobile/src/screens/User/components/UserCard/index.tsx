import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';

import { useAuth } from '@/hooks/auth';

import { Card, MainContent, Photo, MainDetails, Title, Info, UserId } from './styles';

export const UserCard: React.FC = () => {
  const { user } = useAuth();

  const birthDateFormatted = useMemo(() => {
    if (!user) return '';
    const { birthDate } = user;

    const date = format(parseISO(birthDate), 'dd/MM/yyyy');

    return date;
  }, [user]);

  if (!user) return <></>;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Clipboard.setString(user.id);
      }}
    >
      <Card>
        <MainContent>
          <Photo
            source={{
              uri: `https://ui-avatars.com/api/?name=${user?.name || '-'}`,
            }}
          />
          <MainDetails>
            <Title>{user.name}</Title>
            <Info>{user.email}</Info>
            <Info>{birthDateFormatted}</Info>
          </MainDetails>
        </MainContent>

        <UserId>{user.id}</UserId>
      </Card>
    </TouchableWithoutFeedback>
  );
};
