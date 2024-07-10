<template v-slot:header>
    <div>
        <beautiful-chat :participants="participants" :titleImageUrl="titleImageUrl" :onMessageWasSent="onMessageWasSent"
            :messageList="messageList" :newMessagesCount="newMessagesCount" :isOpen="isChatOpen" :close="closeChat"
            :icons="icons" :open="openChat" :showEmoji="true" :showFile="false" :showEdition="true"
            :showDeletion="false" :showLauncher="true" :showCloseButton="true" :colors="colors"
            :alwaysScrollToBottom="alwaysScrollToBottom" :messageStyling="messageStyling" @onType="handleOnType"
            @edit="editMessage" />
    </div>
</template>

<script>
export default {

    data() {
        return {
            participants: [
                {
                    id: 'bot',
                    name: 'Chatbot',
                    imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
                },
                {
                    id: 'me',
                    name: 'me'
                }
            ],
            titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
            messageList: [
                { type: 'text', author: `bot`, data: { text: `Xin chào tôi có thể giúp gì được cho bạn` } }
            ],
            newMessagesCount: 0,
            isChatOpen: false,
            showTypingIndicator: '',
            colors: {
                header: {
                    bg: '#4e8cff',
                    text: '#ffffff'
                },
                launcher: {
                    bg: '#4e8cff'
                },
                messageList: {
                    bg: '#ffffff'
                },
                sentMessage: {
                    bg: '#4e8cff',
                    text: '#ffffff'
                },
                receivedMessage: {
                    bg: '#eaeaea',
                    text: '#222222'
                },
                userInput: {
                    bg: '#f4f7f9',
                    text: '#565867'
                }
            },
            alwaysScrollToBottom: false,
            messageStyling: true
        }
    },
    methods: {
        sendMessage(text) {
            console.log(text)
            if (text.length > 0) {
                this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
                console.log(text)
                this.onMessageWasSent({ author: 'chabot', type: 'text', data: { text } })
            }
        },

        async onMessageWasSent(message) {
            console.log(message)
            const user = JSON.parse(localStorage.getItem('user'))
            console.log(user)
            this.messageList.push(message)

            // const message_loading = { type: 'text', author: 'bot', data: { text: '...' } }
            // this.messageList.push(message_loading)

            const response = await this.getBotResponse(message)
            console.log("Response received: ", response)

            // this.messageList = this.messageList.filter(msg => msg !== message_loading)
            if (response) {
                this.messageList.push({ type: 'text', author: 'bot', data: { text: response } })
            }

        },
        async getBotResponse(message) {
            try {
                const response = await fetch('http://127.0.0.1:8000/chatbot', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: message.data.text })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                return data.response;
            } catch (error) {
                console.error('Error fetching bot response:', error);
                return 'Sorry, something went wrong. Please try again later.';
            }
        },
        openChat() {
            this.isChatOpen = true
            this.newMessagesCount = 0
        },
        closeChat() {
            this.isChatOpen = false
        }
    }
}
</script>