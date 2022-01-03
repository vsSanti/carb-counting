import { ReactNode, useCallback, useMemo, useState } from 'react';
import { Modal, ModalProps } from 'antd';

type Props = ModalProps & {
  innerContent: ReactNode;
};
type ReturnType = {
  openModal(): void;
  closeModal(): void;
  modalContent: ReactNode;
};

export const useModal = ({ innerContent, ...rest }: Props): ReturnType => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const modalContent = useMemo(
    () => (
      <Modal
        {...rest}
        visible={isModalVisible}
        onOk={closeModal}
        onCancel={closeModal}
      >
        {innerContent}
      </Modal>
    ),
    [closeModal, innerContent, isModalVisible, rest],
  );

  return {
    openModal,
    closeModal,
    modalContent,
  };
};
