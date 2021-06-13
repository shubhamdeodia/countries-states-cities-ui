import {
    Button,
    ModalOverlay,
    ModalContent,
    Modal,
    ModalFooter,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
    Text
} from '@chakra-ui/react';
import { useAppSelector } from '../../dux/hooks';
import { ISelectedEntityData } from '../../models/store';

type InforModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

function InfoModal({ isOpen, onClose }: InforModalProps): JSX.Element {
    const selectedData = useAppSelector((state) => state.selectedEntityData);

    console.log(
        '%c 😳: selectedData ',
        'font-size:16px;background-color:#ca8bd9;color:white;',
        selectedData
    );
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedData.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {Object.keys(selectedData).map(
                            (key: keyof ISelectedEntityData) =>
                                selectedData[key] && (
                                    <Text
                                        key={key}
                                    >{`${key} : ${selectedData[key]}`}</Text>
                                )
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="teal" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export { InfoModal };
