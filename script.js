// Object called student with a property called name
const student = {
    name: "John Doe"
};

// Adding a method to the Object prototype
Object.prototype.getKeys = function() {
    // Using Object.keys to get an array of keys
    return Object.keys(this);
};

// Example usage
console.log(student.getKeys()); // Output: ['name']

