import { AppShell, Navbar, Header } from '@mantine/core';
import Sidebar from './sidebar';

export default function Layout({ children }) {
  

  return (
<AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }}  p="xs"><Sidebar/></Navbar>}
      header={<Header height={60} p="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
       <main>{children}</main>
    </AppShell>


  )
}