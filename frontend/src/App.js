import React from 'react';

// Layouts
import { Header } from './layouts/header-dashboard/dashboard';
import { CustomTable } from './layouts/table/custom-table';

const App = () => {

  return (
    <main>
      <section className='p-10 min-w-[1000px] max-w-[1920px] m-auto'>

        {/* Header of dashboard */}
        <Header />

        {/* Custom table with data */}
        <CustomTable />

      </section>
    </main>
  );
};

export default App;