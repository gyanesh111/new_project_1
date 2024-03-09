const loginController = () => {
  try {
    // Add your login logic here
  } catch (error) {
    console.log('Error occurred:', error);
  }
};

const registerController = () => {
  try {
    // Add your registration logic here
  } catch (error) {
    console.log(`Error occurred: ${error}`);
    console.log('Fix the error'); 
  }
};

export { loginController, registerController };
