import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import PropTypes from 'prop-types';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import Search from '../Search/Search';


BasicTable.propTypes = {
  lists: PropTypes.array,
};

BasicTable.defaultProps = {
  lists: [],
};


function BasicTable(props) {

  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function fetchList() {
      try {
        const requestUrl = 'http://localhost:8080/categories'
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        setLists(responseJSON);
      } catch (error) {
        console.log("loi r", error);
      }
    }
    fetchList();
  }, []);

  const hdlDeleteStudent = (id) => {
    console.log(id);
    async function del() {
      const requestUrl = (`http://localhost:8080/categories/${id}`);
      const response = await fetch(requestUrl, {
        method: 'DELETE',
      });
      const responseJSON = await response.json();
      console.log({ responseJSON });
      setLists(responseJSON);
    }
    del();
  };

  // const [name, setName] = useState('');
  // const hdlSearchNameChange = (event) => {
  //   let nameSearch = event.target.value;
  //   setLists(nameSearch);
  // };


  const handleSearch = (newValue) => {
    console.log('haha', newValue);
    setLists((prev) => ({
      ...prev,
      name_search: newValue.searchTerm,
    }));
  }

  return (
    <Box sx={{
      background: "#CCCCCC",
      paddingTop: 4,
      paddingBottom: 4,
    }}>

      {/* <p>Search by Name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => hdlSearchNameChange(e)}
      /> */}
      <Search onSubmit={handleSearch} />

      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="left">name</TableCell>
                <TableCell align="left">email&nbsp;</TableCell>
                <TableCell align="left">gender&nbsp;</TableCell>
                <TableCell align="left">teams&nbsp;</TableCell>
                <TableCell align="left">action&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lists.map((list) => (
                <TableRow
                  key={list.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {list.id}
                  </TableCell>
                  <TableCell align="left">{list.name}</TableCell>
                  <TableCell align="left">{list.email}</TableCell>
                  <TableCell align="left">{list.gender}</TableCell>
                  <TableCell align="left">{list.teams}</TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="h6"
                      component="span"
                      onClick={() => hdlDeleteStudent(list.id)}>
                      <ClearIcon />
                    </Typography>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
export default BasicTable;
