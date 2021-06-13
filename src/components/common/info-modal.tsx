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
import { SelectedDetails } from '../../models/store';

type InforModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

function InfoModal({ isOpen, onClose }: InforModalProps): JSX.Element {
    const selectedDetails = useAppSelector((state) => state.selectedDetails);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedDetails.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {Object.keys(selectedDetails).map(
                            (key: keyof SelectedDetails) =>
                                selectedDetails[key] && (
                                    <Text
                                        key={key}
                                    >{`${key} : ${selectedDetails[key]}`}</Text>
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
