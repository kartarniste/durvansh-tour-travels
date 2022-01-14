import './App.css';

import PageView from  './component/view/PageView';
import SectionView from './component/view/SectionView';
import View from './component/view/View';
import CompanyInfo from './CustomComponent/invoice/OwnerDetails/CompanyInfo';
import ClientInfo from './CustomComponent/invoice/ClientDetails/ClientInfo';
import InvoiceItemInfo from './CustomComponent/invoice/InvoiceItem/InvoiceItemInfo';
import InvoiceFooterDetails from './CustomComponent/invoice/FooterSection/InvoiceFooterDetails';

function App() {

  return (
      <PageView>
        <CompanyInfo />
        <SectionView className='taxInvoiceTitle'><span>Tax Invoice</span></SectionView>
        <View className='taxInvoiceBody'>
            <ClientInfo />    
            <InvoiceItemInfo />
            <InvoiceFooterDetails />
        </View>
        
        <footer className='footerCls'>
            <span>( Subject to Nagpur Jurisdiction)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E&OE</span>
        </footer>

        <button onClick={()=>{window.print()}}>Print</button>

      </PageView>
  );
}

export default App;
