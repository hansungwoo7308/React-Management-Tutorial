import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = themes => ({
  root: {
    width: '100%',
    marginTop: themes.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  }
})


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

class App extends Component {
  render() {
    const { classes } = this.props;
    console.log(this);
    return (
      // <div className="gray-background">
      //   <img src={logo} lat="logo" />
      //   <h2>Let's develop management system!</h2>
      // </div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
