import React from 'react';

import { 
  MantineProvider, 
  Button, 
  AppShell, 
  Navbar, 
  Header,
  Text 
} from '@mantine/core';

const App: React.FC = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar height={600} padding="xs" width={{ base: 300 }}>
        <Navbar.Section>
          <Text>
            Dashboards
          </Text>
        </Navbar.Section>
        <Navbar.Section>
          <Text>  
            KPIs
          </Text>
        </Navbar.Section>
        <Navbar.Section>
          <Text>
            Carga de dados
          </Text>
        </Navbar.Section>
      </Navbar>
      }
      
      header={<Header height={60} padding="xs">
        {/* Header content */}
      </Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );

}

// Custom theme is applied to all components in App
function WithProvider() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <App />
    </MantineProvider>
  );
}



export default WithProvider;
