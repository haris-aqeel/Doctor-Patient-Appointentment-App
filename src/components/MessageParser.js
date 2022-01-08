class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
      
      
  
      if (lowerCaseMessage.includes("hi doctor")) {
        this.actionProvider.greet();
      }
      if (lowerCaseMessage.includes("actually i am having fever")) {
        this.actionProvider.greets();
      }
      if (lowerCaseMessage.includes("thank you so much doctor")) {
        this.actionProvider.greetss();
      }
  
      if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleJavascriptList();
      }
    }
  }
  
  export default MessageParser;