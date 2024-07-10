<template>
    <div>
        <VueBotUI :messages="data" :options="botOptions" @msg-send="messageSendHandler" />
    </div>
</template>

<script>
import { VueBotUI } from 'vue-bot-ui'

export default {
    components: {
        VueBotUI,
    },
    data() {
        return {
            data: [
                // Example message data
                { type: 'text', content: 'Hello! How can I assist you today?', sender: 'bot' }
            ],
            botOptions: {
                // Example bot options
                theme: 'light', // 'light' or 'dark'
                botName: 'Assistant',
                userName: 'You',
                placeholder: 'Type your message...',
                sendButton: true,
                typingIndicator: true,
                avatar: {
                    bot: 'https://example.com/bot-avatar.png',
                    user: 'https://example.com/user-avatar.png'
                }
            }
        }
    },
    methods: {
        messageSendHandler(message) {
            // Example handler logic
            console.log('Message sent:', message);
            // Add the user's message to the data array
            this.data.push({ type: 'text', content: message, sender: 'user' });

            // Simulate a bot response after a short delay
            setTimeout(() => {
                this.data.push({ type: 'text', content: 'I am here to help!', sender: 'bot' });
            }, 1000);
        }
    }
}
</script>

<style scoped>
/* Example custom styles */
.vue-bot-ui {
    max-width: 600px;
    margin: 0 auto;
}

.vue-bot-ui .message-bot {
    background-color: #e0f7fa;
    border-radius: 10px;
    padding: 10px;
    margin: 5px 0;
}

.vue-bot-ui .message-user {
    background-color: #c8e6c9;
    border-radius: 10px;
    padding: 10px;
    margin: 5px 0;
    text-align: right;
}
</style>