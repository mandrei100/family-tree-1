// 'It takes a value in the constructor and stores it.'
class FamilyTree {
  constructor (childsParent) {
    // If given anything thats not a string, the family tree errors.
    if (childsParent === 'undefined' || typeof childsParent !== 'string') {
      throw error;
    }
    this.childsParent = childsParent;
    this.children = [];
  }

  // Has an insert method
  insert(child) {
    if (child === undefined){
      return undefined;
    } else {
    const newChild = new FamilyTree(child);
    this.children.push(newChild);
    }
  }

  // Returns Family Size
  familySize(arr) {
    var arr = this.children;
    return arr.length+1;

  }

  // findMemeber
  findMember(memberName){
    // let found = undefined;
     return this.children.forEach(finder => {
      if (finder.childsParent === memberName){
        return finder;        
      } else {
        return undefined;
      }
    })
  }
  log(){    
    return `--${this.childsParentt}\n${this.children};`
  }

}




module.exports = FamilyTree;
