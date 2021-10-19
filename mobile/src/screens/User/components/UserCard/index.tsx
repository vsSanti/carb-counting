import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';

import { useAuth } from '@/hooks/auth';

import { Card } from '../styles';
import { MainContent, Photo, MainDetails, Title, Info, UserId } from './styles';

export const UserCard: React.FC = () => {
  const { user } = useAuth();

  const birthDateFormatted = useMemo(() => {
    if (!user) return '';

    const { birthDate } = user;

    const parsedDate = parseISO(birthDate);
    const dtDateOnly = new Date(
      parsedDate.valueOf() + parsedDate.getTimezoneOffset() * 60 * 1000
    );

    const date = format(dtDateOnly, 'dd/MM/yyyy');

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
