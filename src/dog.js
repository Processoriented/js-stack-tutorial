// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Wha wha, I am ${this.name}`
  }
}

export default Dog
