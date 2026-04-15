const byteSize = (str) => {
  // write your code here
	let blobObj = new Blob([str]);
	return blobObj.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
