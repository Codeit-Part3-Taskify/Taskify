import ReactDOM from 'react-dom';
import { selectModal } from 'src/utils/selectModal';
import { useAtomValue } from 'jotai';
import { modalAtom } from 'src/store/store';
import ModalContainer from '../Modal/Container/ModalContainer';

export default function Modal() {
  const modal = useAtomValue(modalAtom);

  return ReactDOM.createPortal(
    modal['status'] && (
      <ModalContainer>{selectModal(modal['name'])}</ModalContainer>
    ),
    document.body
  );
}
