import './App.css';

import PageView from  './component/view/PageView';
import SectionView from './component/view/SectionView';
import View from './component/view/View';
import CompanyInfo from './CustomComponent/invoice/OwnerDetails/CompanyInfo';
import ClientInfo from './CustomComponent/invoice/ClientDetails/ClientInfo';
import InvoiceItemInfo from './CustomComponent/invoice/InvoiceItem/InvoiceItemInfo';
import InvoiceFooterDetails from './CustomComponent/invoice/FooterSection/InvoiceFooterDetails';

function App() {
  var invoiceData = localStorage.getItem('invoice');
  if(invoiceData != null && invoiceData != ''){
    invoiceData = JSON.parse(invoiceData);
  }
  return (
      <PageView>
        <CompanyInfo />

        <SectionView className="hbox justify-content-space-between taxInvoiceTitleCls">
              <View className="vbox taxInvoiceTitle">
                    <span>TAX INVOICE</span>
              </View>
              <View className="vbox originalRecipientCls">
                    <span>Original for Recipient</span>
              </View>
        </SectionView>
        
        <View className='taxInvoiceBody'>
            <ClientInfo invoiceData={invoiceData}/>    
            <InvoiceItemInfo invoiceData={invoiceData}/>
            <InvoiceFooterDetails invoiceData={invoiceData}/>
        </View>
        
        <footer className='footerCls'>
            <span>( Subject to Nagpur Jurisdiction)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E&OE</span>
        </footer>

        <button id="printPageButton" onClick={()=>{window.print()}}>Print</button>

      </PageView>
  );
}

export default App;
