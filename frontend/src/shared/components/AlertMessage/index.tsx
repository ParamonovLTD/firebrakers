import React, { memo, FC, useState } from 'react';
import { Transition } from 'react-transition-group';
import {
  StyledDiv, Animation, AlertContainer,
  IconWarning, StyledSpan, IconClose, StyledText,
} from './styles';


const DURATION = 300;
const defaultStyle = {
  transition: `opacity ${DURATION}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: any = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};


export const Alert: FC = memo(() => {
  const [show, setShow] = useState<any>(true);

  const [none, setNone] = useState<string>('block');

  const onClose = () => {
    setNone('none');
    setShow(false);
  };
  return (
    <Transition in={show} timeout={300}>
      {(state: any) => (
        <Animation
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          onClick={onClose}
        >
          <AlertContainer style={none === 'none' ? { display: 'none' } : { display: 'block' }}>
            <StyledDiv>
              <div>
                <IconWarning />
                <StyledSpan>Warning Notes</StyledSpan>
              </div>
              <IconClose onClick={onClose} />
            </StyledDiv>
            <StyledText>
              Please fill in the information in the available sections
              (Seller Information; Seller Verification & Security;
              Billing Method and Optional Information).
              You will be able to publish your services after we approve your account.
              Thanks!
            </StyledText>
          </AlertContainer>
        </Animation>
      )}
    </Transition>
  );
});