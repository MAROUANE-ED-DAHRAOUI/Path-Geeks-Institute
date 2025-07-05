function isPalindrome(str) {
    // Compare the string to its reversed version
    return str === str.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("bob"));   // true
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("hello")); // false
