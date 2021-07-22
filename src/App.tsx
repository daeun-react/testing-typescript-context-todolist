import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { ToDoListProvider } from 'contexts';
import { Add, Detail, List, NotFound } from 'pages';
import { PageHeader } from 'components';

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <PageHeader />
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route component={NotFound}></Route>
        </Switch>
      </Container>
    </ToDoListProvider>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
