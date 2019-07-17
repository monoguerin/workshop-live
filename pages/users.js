/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useQuery from '../components/hooks/useQuery';
import usersQuery from '../components/graphql/usersQuery';
import Loading from '../components/Loading';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  project: {
    border: '1px solid gray',
    width: '33%',
    display: 'inline-block;'
  },
});

const Project = ({
  name,
  id,
}) => {
  const classes = useStyles();

  return (
    <div key={id} className={classes.project}>
      <p>{name}</p>
      <Button color="primary">Go to Project</Button>
    </div>
  );
};


const User = ({
  name,
  email,
  projects,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs key={email}>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`<${email}>`}
          </Typography>
          <h3>Projects</h3>
          {projects.map(Project)}
        </CardContent>
      </Card>
    </Grid>
  );
};

const UsersCard = ({ users }) => users.map(User);

const Users = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(usersQuery);

  if (error) {
    return null;
  }

  return (
    loading
      ? <Loading />
      : (
        <Grid container spacing={3}>
          <UsersCard users={data.users} />
        </Grid>
      )
  );
};

export default Users;
