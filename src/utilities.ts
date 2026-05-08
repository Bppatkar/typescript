// Utility

/* 
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
*/
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

//! Partial utility type [means kisi bhi type ke sare properties ko optional bana deta hai]

type PartialUser = Partial<User>;

//? now we dontt need to provide all the properties of the User interface, we can provide only some of them, and the rest will be optional, isiliye hume sirf name, email aur address dena hai, baki properties optional ho jayengi qki ham use kar rhe hai - Partial utility type jo ki TypeScript ke built-in utility types mein se ek hai, aur iska use karke hum kisi bhi type ke sare properties ko optional bana sakte hai,

const partialUser: PartialUser = {
  name: 'John Doe',
  email: 'example@ex.com',
  address: {
    street: '123 Main St',
    suite: 'Apt. 1',
    city: 'Anytown',
    zipcode: '12345',
    geo: {
      lat: '0.0000',
      lng: '0.0000',
    },
  },
};

//! Required Utility Type [means kisi bhi type ke sare properties ko required bana deta hai]

type RequiredUser = Required<PartialUser>;

//? now we need to provide all the properties of the User interface, because we have used the Required utility type, which makes all the properties required, isiliye hume sare properties dena hoga, otherwise error aayega
const requiredUser: RequiredUser = {
  name: 'John Doe',
  email: 'example1@ms.com',
  address: {
    street: '123 Main St',
    suite: 'Apt. 1',
    city: 'Anytown',
    zipcode: '12345',
    geo: {
      lat: '0.0000',
      lng: '0.0000',
    },
  },
  id: 1,
  username: 'johndoe',
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

//! Readonly Utility Type [means kisi bhi type ke sare properties ko readonly bana deta hai, jiska matlab hai ki unhe modify nahi kiya ja sakta]

type ReadonlyUser = Readonly<User>;

//? now we cannot modify any of the properties of the User interface, because we have used the Readonly utility type, which makes all the properties readonly, isiliye hume kisi bhi property ko modify nahi karna hai, otherwise error aayega
const readonlyUser: ReadonlyUser = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  email: 'example2@ans.com',
  address: {
    street: '123 Main St',
    suite: 'Apt. 1',
    city: 'Anytown',
    zipcode: '12345',
    geo: {
      lat: '0.0000',

      lng: '0.0000',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const updateReadonlyUser = (user: ReadonlyUser) => {
  // user.name = 'Jane Doe'; // This will throw an error because we cannot modify any of the properties of the User interface, because we have used the Readonly utility type, which makes all the properties readonly, isiliye hume kisi bhi property ko modify nahi karna hai, otherwise error aayega
  console.log(user);
};
updateReadonlyUser(readonlyUser); // Output: { id: 1, name: 'John Doe', username: 'johndoe', email: 'example2@ans.com', address: { ... }, phone: '1-770-736-8031 x56442', website: 'hildegard.org', company: { ... } }

//! Record Utility Type [means kisi bhi type ke properties ko ek specific type ke key-value pair mein convert kar deta hai]

type UserRecord = Record<string, User>;

//? now we can create an object of type UserRecord, which is a record of string keys and User values, isiliye hume ek object create karna hai jisme string keys ho aur User values ho, otherwise error aayega
const userRecord: UserRecord = {
  user1: {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'example3@ans.com',
    address: {
      street: '123 Main St',
      suite: 'Apt. 1',
      city: 'Anytown',
      zipcode: '12345',
      geo: {
        lat: '0.0000',
        lng: '0.0000',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
};
  