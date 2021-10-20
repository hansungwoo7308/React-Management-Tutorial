import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': '김철수',
    'birthday': '961222',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': '이영희',
    'birthday': '961222',
    'gender': '여자',
    'job': '공무원'
  },
]
function App() {
  return (
    // <div className="gray-background">
    //   <img src={logo} lat="logo" />
    //   <h2>Let's develop management system!</h2>
    // </div>
    <div>
      {customers.map((customer) => {
        return (
          <Customer 
            key={customer.id}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
          />
        );
      })}
    </div>
  );
}

export default App;
