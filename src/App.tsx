// src/App.tsx

function App() {
  // Placeholder data for store links (in a real app, this might come from config or props)
  const appStoreLink = "#"; // Replace with actual App Store link
  const playStoreLink = "#"; // Replace with actual Play Store link
  const whatsappLink = "#"; // Replace with actual WhatsApp link

  return (
    <div className="w-full min-h-screen px-4 md:px-section-px pt-0 md:pt-24 pb-8 md:pb-section-py relative  inline-flex flex-col justify-start items-center gap-6 md:gap-gutter overflow-x-hidden">
      {/* Navbar - Absolute positioned */}
      <div className="w-full max-w-5xl h-16 md:h-24 left-1/2 -translate-x-1/2 top-0 absolute px-4 md:px-0 z-50">
        <div className="w-full h-14 md:h-16 pl-4 md:pl-6 pr-2 md:pr-3 mt-4 md:mt-7 rounded-navbar outline-1 outline-border-secondary inline-flex justify-center items-center overflow-hidden">
          <div className="self-stretch w-full h-10 md:h-12 inline-flex justify-between items-center">
            <div className="flex justify-start items-start">
              <div className="h-10 md:h-12 px-2 md:px-3 flex justify-start items-center">
                <img 
                  className="h-8 md:h-12 w-auto" 
                  src="/src/assets/item7_navbar_logo.png" 
                  alt="Item 7 Logo"
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 sm:gap-8">
              <div className="flex justify-center items-center gap-group-gap">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-button-px py-button-py bg-background-button rounded-button flex justify-center items-center gap-2 text-text-primary-lightbg font-button text-base leading-normal hover:opacity-90 transition-opacity"
                >
                  <img 
                    src="/src/assets/tabler_brand-whatsapp-filled.png" 
                    alt="WhatsApp" 
                    className="w-6 h-6 object-contain"
                  />
                  <span className="hidden sm:inline text-black font-montserrat font-semibold text-base leading-[150%] tracking-[0%]">Contact Us on Whatsapp</span>
                  <span className="sm:hidden text-black font-montserrat font-semibold text-base leading-[150%] tracking-[0%]">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Blur - adjust positioning as needed relative to content */}
      <div className="w-[548px] h-[491px] left-[calc(50%-200px)] top-[450px] absolute blur-accent-strong opacity-60 pointer-events-none" />

      {/* Hero Section */}
      <div className="w-full min-h-[100vh] md:min-h-0 max-w-3xl flex flex-col justify-end md:justify-start items-center gap-4 md:gap-4 mt-0 z-10 pb-12 md:pb-0">
        <div className="self-stretch flex flex-col justify-start items-center gap-3 md:gap-4">
          <div className="w-full max-w-3xl text-center flex flex-col items-center justify-center gap-1.5">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span style={{ fontFamily: 'Eras Demi ITC' }} className="text-text-primary-darkbg text-3xl sm:text-hero font-normal leading-tight tracking-[0%] text-center whitespace-nowrap">Get Your</span>
              <img src="/src/assets/item7_text.png" alt="Item 7" className="h-10 sm:h-14 w-auto" />
            </div>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span style={{ fontFamily: 'Eras Demi ITC' }} className="text-text-primary-darkbg text-3xl sm:text-hero font-normal leading-tight tracking-[0%] text-center whitespace-nowrap">to</span>
              <img src="/src/assets/go_text.png" alt="Go" className="h-10 sm:h-14 w-auto" />
            </div>
          </div>
          
          <div className="self-stretch text-center text-text-primary-darkbg text-lg font-body leading-snug">
            Avoid the wait for pickup, <br/>Order through the app today.
          </div>
        </div>

        <div className="pt-4 inline-flex flex-wrap justify-center items-center gap-group-gap">
          <a 
            href={appStoreLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-button-px py-button-py bg-background-button rounded-button flex justify-center items-center gap-2 text-text-primary-lightbg hover:opacity-90 transition-opacity"
          >
            <img 
              src="/src/assets/apple icon.png" 
              alt="App Store" 
              className="w-6 h-6 object-contain"
            />
            <span className="text-black font-montserrat font-semibold text-base leading-[150%] tracking-[0%]">App Store</span>
          </a>
          <a 
            href={playStoreLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-button-px py-button-py bg-background-button rounded-button flex justify-center items-center gap-2 text-text-primary-lightbg hover:opacity-90 transition-opacity"
          >
            <img 
              src="/src/assets/playstore_icon.png" 
              alt="Play Store" 
              className="w-6 h-6 object-contain"
            />
            <span className="text-black font-montserrat font-semibold text-base leading-[150%] tracking-[0%]">Play Store</span>
          </a>
        </div>
      </div>

      {/* Main Image */}
      <img 
        className="w-[80%] md:w-auto scale-[1.15] mt-8 md:mt-12 z-0" 
        src="/src/assets/iphone mockup.png" 
        alt="iPhone App Preview" 
      />

      {/* How it Works Section */}
      <div className="w-full px-4 md:px-section-px py-12 md:py-section-py flex flex-col justify-start items-center gap-8 md:gap-10 overflow-hidden z-10">
        <div className="w-full max-w-3xl text-center text-text-primary-darkbg text-3xl md:text-4xl font-heading leading-tight mb-8 md:mb-16">
          How it works
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-gutter px-2 md:px-0">
          <div className="flex-1 inline-flex flex-col justify-start items-center gap-4 sm:gap-element-gap">
            <img src="/src/assets/ready.png" alt="Ready" className="h-16 sm:h-20 w-auto mb-4 sm:mb-6" />
            <div className="self-stretch flex flex-col justify-start items-start gap-element-gap">
              <div className="self-stretch text-center text-text-primary-darkbg text-xl sm:text-2xl font-heading leading-8 sm:leading-9">
                Download The App
              </div>
              <div className="self-stretch text-center text-text-primary-darkbg text-sm sm:text-base font-button leading-normal">
                Download and install the app by clicking the button on this page.
              </div>
            </div>
          </div>
          
          <div className="flex-1 inline-flex flex-col justify-start items-center gap-element-gap">
            <img src="/src/assets/set.png" alt="Set" className="h-20 w-auto mb-6" />
            <div className="self-stretch flex flex-col justify-start items-start gap-element-gap">
              <div className="self-stretch text-center text-text-primary-darkbg text-2xl font-heading leading-9">
                Make Your Order
              </div>
              <div className="self-stretch text-center text-text-primary-darkbg text-base font-button leading-normal">
                Pick your favourite item 7 through the app, customize the order to your heart's content, and pick the closest pick-up location to you.
              </div>
            </div>
          </div>

          <div className="flex-1 inline-flex flex-col justify-start items-center gap-element-gap">
            <img src="/src/assets/go.png" alt="Go" className="h-20 w-auto mb-6" />
            <div className="self-stretch flex flex-col justify-start items-start gap-element-gap">
              <div className="self-stretch text-center text-text-primary-darkbg text-2xl font-heading leading-9">
                Pick It Up
              </div>
              <div className="self-stretch text-center text-text-primary-darkbg text-base font-button leading-normal">
                When your order is ready, you'll get notified and you can pick it up!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download App CTA Section */}
      <div className="w-full max-w-6xl h-auto min-h-[640px] sm:min-h-[640px] relative bg-black rounded-[32px] sm:rounded-[64px] outline-4 outline-white backdrop-blur-[2px] overflow-hidden mx-auto px-4 sm:px-8 py-8 sm:py-16 flex items-center">
        {/* Decorative Blur - exact positioning from Figma */}
        <div className="w-1/2 h-1/2 right-0 bottom-0 absolute bg-red-600 blur-[300px]" />
        
        <div className="relative flex flex-col justify-start items-start gap-4 sm:gap-6 w-full sm:w-auto md:pl-16"> {/* Content above blur */}
          <div className="flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div style={{ fontFamily: 'Eras Demi ITC' }} className="max-w-lg text-white text-4xl sm:text-6xl font-normal leading-tight">Download the App today!</div>
          </div>
          <div className="pt-2 sm:pt-4 inline-flex flex-wrap justify-start items-center gap-3 sm:gap-4">
            <a 
              href={appStoreLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-full flex justify-center items-center gap-2 hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <img 
                src="/src/assets/apple icon.png" 
                alt="App Store" 
                className="w-5 sm:w-6 h-6 sm:h-7 object-contain"
              />
              <span className="text-black font-montserrat font-semibold text-sm sm:text-base leading-[150%] tracking-[0%]">App Store</span>
            </a>
            <a 
              href={playStoreLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-[41px] flex justify-center items-center gap-2 hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <img 
                src="/src/assets/playstore_icon.png" 
                alt="Play Store" 
                className="w-6 h-7 object-contain"
              />
              <span className="text-black font-montserrat font-semibold text-base leading-[150%] tracking-[0%]">Play Store</span>
            </a>
          </div>
        </div>
        {/* Decorative Phone Image - positioned within this card */}
        <img 
            className="hidden lg:block w-auto max-h-[120%] absolute right-0 -bottom-8 origin-bottom-right pointer-events-none z-0" 
            src="/src/assets/handmockup.svg" 
            alt="Hand holding phone with Item 7 app"
        />
      </div>

    </div>
  );
}

export default App;