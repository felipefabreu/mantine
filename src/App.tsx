import React, { useState } from 'react';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

import { 
  MantineProvider, 
  Button, 
  AppShell, 
  Navbar, 
  Header,
  Text, 
  Title,
  ColorScheme,
  useMantineColorScheme,
  ColorSchemeProvider,
  ActionIcon,
  
} from '@mantine/core';
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';

const App: React.FC = () => {

  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }}>
        <AppShell
          padding="md"
          navbar={
            <Navbar  padding="xs" width={{ base: 300 }}>
            <Navbar.Section>
              <Text color='blue' variant='link' component='a' href='#' >
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
          
          header={<Header height={60} padding="md" >
             
             <ActionIcon
              variant="outline"
              color={colorScheme === 'dark' ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {colorScheme === 'dark' ? (
                <SunIcon style={{ width: 18, height: 18 }} />
              ) : (
                <MoonIcon style={{ width: 18, height: 18 }} />
              )}
            </ActionIcon>

          </Header>}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <Title>Aplicação</Title>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );

}

// Custom theme is applied to all components in App
function WithProvider() {
  return (
    
      <App />
    
  );
}



export default App;
