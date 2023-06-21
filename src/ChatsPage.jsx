import PropTypes from 'prop-types';
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '42228e2a-9627-40a5-a829-5210404fb854',
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;
