import { UserOutlined } from '@ant-design/icons';

const ChatCard = (chat) => {

    console.log(chat);
    // BEGIN: Hide chat

    if (chat) {
        var chatDate = new Date(chat['created']);
        var nowDate = new Date();
        var minutes = (nowDate.getTime() - chatDate.getTime()) / 1000 / 60;
        if (minutes > 90) {
            // AKSHAYFUNCTION()
            return <div />;
        }   
    } else
        return <div />;

    // END: Hide chat

    return (
        <div class="chat-card-wrapper">
            <div class="chat-card-title">
                {chat?.title}
            </div>
            <div class="chat-card-info">
                <UserOutlined />
                
            </div>
        </div>
    );
    /*
    <div class="chat-card-body">
        Test message
    </div>
    */
}

export default ChatCard;