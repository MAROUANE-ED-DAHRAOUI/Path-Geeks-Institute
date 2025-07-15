class Dog {
  constructor(name) {
    this.name = name;
  }
};

  // 1 ---> This will throw an error because 'this' is not defined in the constructor
class Labrador extends Dog 
{
  constructor(name, size) {
    this.size = size;
  }
};


  // 2 --> this succeeds because it calls the parent constructor
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


  // 3 --> This will throw an error because 'this' is not defined in the constructor
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4 ---> This will throw an error because 'this' is not defined in the constructor
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};
