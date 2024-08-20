export let apiKey = 'asadkjlkjasdf2ssdf3';
export let xyz = 'xyz';

// export default 'asadkjlkjasdf2ssdf3'; //can use name but cant use variable keyword

// export default apiKey2 = 'asadkjlkjasdf2ssdf3';


export default (userName='John Doe', message='default dummy message') => {
  // console.log('inside arrow function');
  // console.log(`User name is: "${userName}" and the message is "${message}"`);
  return `Hi, from arrow function. I'm ${userName} and I must say ${message}`;
}

