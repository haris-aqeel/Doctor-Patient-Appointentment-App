class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, patient! How are you feeling?")
      this.updateChatbotState(greetingMessage)
    }
    greets() {
      console.log("hello");
      const greetingMessage = this.createChatBotMessage("Ok no problem! I will precribe you with the medicine.Take 2 panadol in the morning and two in the evening after food")
      this.updateChatbotState(greetingMessage)
    }
    greetss() {
      const greetingMessage = this.createChatBotMessage("Welcome! Tak care of yourself")
      this.updateChatbotState(greetingMessage)
    }
    updateChatbotState(message) {
 
      // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
       
          
         this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
          }))
        }
  
    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Have a look at these medicine for your disease",
        {
          widget: "javascriptLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;