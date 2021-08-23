function getName(): string {
  return 'Esto';
}

function getAge(): number {
  return 21;
}

function getMaritalStatus(): boolean {
  return false;
}

// tidak ada return value
function printName(): void {
  console.log('Esto Triramdani Nurlustiawan');
}

// parameter
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// function as type

type Tambah = (val1: number, val2: number) => number;

function add(value1: number, value2: number): number {
  return value1 + value2;
}

// default parameter
const fullName = (
  firstName: string,
  lastName: string = 'Nurlustiawan'
): string => {
  return firstName + ' ' + lastName;
};

type Profile = {
  name: string;
  age: number;
  isMarried: boolean;
};

const getProfile = (profile: Profile): Profile => {
  return profile;
};

// optional paramter

const optionalParameter = (value1: string, value2?: string): string => {
  return value1 + value2;
};
console.log(optionalParameter('', 'aa'));
