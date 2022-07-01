import React from 'react';
import { Box, Button, Input, Image, Select, border } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import styles from './LandingPage1.module.css';
// import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { Slider } from './Slider';
import { Slider2 } from './Slider2';
import { Slider3 } from './Slider3';
import { Slider4 } from './Slider4';
import { Link } from 'react-router-dom';
import './chatbot.css';
import './styles.css';
// import { Navbar } from "./Navbar1";

const LandingPage1 = () => {
  const [show, setShow] = React.useState(false);

  function closePopup() {
    // this.parentNode.style.display = 'none';

    setShow(true);
  }

  function changeStatus() {
    setShow(false);
  }

  function displayMessage() {
    // document.getElementsByClassName("collapseMsgWrapper").style.display="block"
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <Box
      color={'#1b2437'}
      background={
        (URL = 'static.naukimg.com/s/7/103/i/homepageBubble.cf43a7a8.svg')
      }
      backgroundImage={
        (URL =
          'https://static.naukimg.com/s/7/103/i/homepageBubble.cf43a7a8.svg')
      }
      backgroundPositionX={'50%'}
      backgroundPositionY={'center'}
      backgroundSize={'cover'}
      backgroundRepeatX={'initial'}
      backgroundRepeatY={'initial'}
      backgroundAttachment={'initial'}
      backgroundOrigin={'initial'}
      backgroundClip={'initial'}
      backgroundColor={'initial'}
      fontFamily={'Inter'}
    >
      <Box display={'flex'} margin={'auto'} text-align={'center'}>
        <Heading
          as="h1"
          font-weight={'700'}
          font-size={'35px'}
          lineHeight={'50px'}
          color={'#1b2437'}
          margin-top={'30px'}
          margin={'auto'}
          font-family={'Roboto Slab'}
        >
          Find your dream job now
        </Heading>
      </Box>

      <br />
      <Box display={'flex'} margin={'auto'}>
        <p
          style={{
            fontSize: '20px',
            lineHeight: '24px',
            color: '#8292b4',
            fontFamily: 'Inter',
            margin: 'auto',
          }}
        >
          5 lakh+ jobs for you to explore
        </p>
      </Box>

      <Box
        w={'80%'}
        p={4}
        display="flex"
        margin="auto"
        height={'60px'}
        alignItems={'center'}
        marginTop="20px"
        borderRadius={'27px'}
        justifyContent={'space-between'}
        boxShadow={' rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
      >
        <SearchIcon paddingTop={'0.5%'} height={'100%'} />
        <Box width={'80%'} display={'flex'} justifyContent={'space-between'}>
          <Input
            type="text"
            placeholder="Enter skills / designations"
            padding={3}
            w={'33%'}
            border={'none'}
            borderRight={'1px solid lightGrey'}
          />
          {/* <Box w={"2px"} height={"80%"} backgroundColor={"grey"}></Box> */}
          <Select
            placeholder={'Select experience'}
            border={'none'}
            borderBottom={'none'}
            color={'grey'}
            width={'30%'}
          >
            <option>Fresher</option>
            <option>1 year</option>
            <option>2 year</option>
          </Select>
          <Input
            placeholder={'Enter Location'}
            width={'30%'}
            border={'none'}
            borderLeft={'0.5px solid lightGrey'}
          />
        </Box>

        <Button
          background={'blue.400'}
          color={'white'}
          p={4}
          borderRadius={'20px'}
          width={'13%'}
        >
          Search
        </Button>
      </Box>

      <Box
        w={'70%'}
        h={'200px'}
        margin={'auto'}
        marginTop={'4%'}
        paddingLeft={'3%'}
        display={'flex'}
        alignItems={'center'}
        borderRadius={'10px'}
        border={'1px dotted lightGray'}
        justifyContent={'space-around'}
        backgroundColor={'rgba(254, 249, 244, 0.8)'}
        boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
      // padding={"10px"}
      >
        <Box w={'25%'} textAlign={'start'} fontSize={'20px'}>
          <ol style={{ padding: '20px' }}>
            <li style={{ padding: '3%', color: 'black', fontWeight: 'bolder' }}>
              Get discovered{' '}
              <span
                style={{
                  marginLeft: '5px',
                  fontWeight: 'bolder',
                  marginTop: '2px',
                }}
              ></span>
            </li>
            <li style={{ padding: '3%' }}>Get contacted</li>
            <li style={{ padding: '3%' }}>Get hired</li>
          </ol>
        </Box>

        <Box w={'18%'} height={'50%'} justifyContent={'space-around'}>
          <Box display={'flex'} gap={'5px'}>
            <Image
              src={'https://img.naukimg.com/logo_images/groups/v1/390292.gif'}
              height={'30%'}
              width={'30%'}
            ></Image>

            <Image
              src={'https://img.naukimg.com/logo_images/groups/v1/4156.gif'}
              height={'30%'}
              width={'30%'}
            ></Image>
          </Box>

          <Box display={'flex'} gap={'5px'} marginTop={'5px'}>
            <Image
              src={'https://img.naukimg.com/logo_images/groups/v1/2016162.gif'}
              height={'30%'}
              width={'30%'}
            ></Image>

            <Image
              src={'https://img.naukimg.com/logo_images/groups/v1/3448628.gif'}
              height={'30%'}
              width={'30%'}
            ></Image>
          </Box>
        </Box>
        <Box w={'60%'} textAlign={'start'} padding={'10px'}>
          <h2
            style={{
              fontweight: 'bolder',
              fontFamily: 'inter',
              fontSize: '20px',
              lineHeight: '23px',
              color: '#1B2437',
            }}
          >
            Become searchable by top companies in your domain
          </h2>

          <p style={{ color: 'grey' }}>
            Companies search for candidate CVs directly for open positions
          </p>
          <Button
            background={'rgb(255,117,85)'}
            borderRadius={'50px'}
            color={'white'}
            width={'40%'}
            marginTop={'3%'}
          >
            Register for free
          </Button>
        </Box>
      </Box>

      <div class="chatbotPopUp">
        {show ? (
          <div class="botmain">
            <div id="botTop">
              <div>
                <img src="https://static.naukimg.com/s/7/103/i/botIcon.9ccc1ddd.svg" />
              </div>
              <div>
                <img
                  onClick={changeStatus}
                  src="//static.naukimg.com/s/7/103/i/cross.8cd86aaf.svg"
                />
              </div>
            </div>
            <div>Hi! I am Naukri’s smart job search assistant!</div>
            <div>
              I see that you are looking for jobs. New jobs are posted on Naukri
              every day.
            </div>
            <div>
              Please click on register and create an account to get the most out
              of Naukri!
            </div>
            <button>Register</button>
          </div>
        ) : (
          //  <p>hello</p>

          <div class="collapseMsgWrapper">
            <div class="crossWrapper">
              <img
                class="crossIcon"
                onClick={closePopup}
                src="//static.naukimg.com/s/7/103/i/cross.8cd86aaf.svg"
              />{' '}
            </div>

            <div class="collapseBotItem" style={{ fontSize: '18px' }}>
              <span class="botText">Want to apply to jobs? Register now!</span>{' '}
            </div>
            <div class="collapseBotChips">
              <button
                class="singleSelectChip"
                style={{
                  fontSize: '18px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  padding: '10px',
                  boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                }}
              >
                Register Now
              </button>
            </div>
          </div>
        )}

        <div class="floatIcon" onClick={displayMessage}>
          <div class="floatingChatIcon">
            <div class="chatbotOnline">
              <div class="online"></div>
            </div>
            <img
              src="//static.naukimg.com/s/7/103/i/naukriIcon.74e6a29a.png"
              class="chatbotNaukIcon"
            />
          </div>
        </div>
      </div>

      <Heading as="h4" textAlign={'center'} padding={'50px'} fontSize={'30px'}>
        Trending on Naukri today
      </Heading>
      <Slider2></Slider2>
      <Heading
        as="h4"
        textAlign={'center'}
        paddingTop={'50px'}
        fontSize={'30px'}
      ></Heading>

      <Heading as="h4" textAlign={'center'} padding={'20px'} fontSize={'30px'}>
        Explore top companies hiring now
      </Heading>
      <Slider4></Slider4>

      <br />
      <br />
      <Heading as="h5" textAlign={'center'} padding={'20px'} fontSize={'30px'}>
        Featured companies actively hiring
      </Heading>
      <br />
      <Slider3></Slider3>
      <br></br>
      <Box
        width={'15%'}
        border={'1px solid #88ADFF'}
        borderRadius={'20px'}
        padding={'10px'}
        color={'#457EFF'}
        margin={'auto'}
        textAlign={'center'}
        fontSize={'19px'}
        fontWeight={'600'}
        fontFamily={'initial'}
      >
        View all companies
      </Box>

      {/* copy cat */}

      <div
        id="mainSection.inventory-3"
        style={{
          background: '#fef9f4',
          width: '90%',
          margin: 'auto',
          marginTop: '50px',
        }}
      >
        <div
          id="mainSection.inventory-3.role-collection-wdgt.v2"
          class="naukri-wdgt role-collection-wdgt naukri-js-wdgt"
          data-widget-name="role-collection-wdgt"
          data-widget='{"widgetName":"role-collection-wdgt","version":"v2","sectionName":"mainSection","widgetSequence":1,"pageName":"ni-desktop-homepage-v1","inventoryContext":{"sectionName":"mainSection","inventoryType":0,"pageName":"ni-desktop-homepage-v1","inventoryName":"inventory-3"},"tags":["t331"]}'
        >
          <div id="role-collection-wdgt">
            <div class="role-collection-wdgt">
              <div class="card-container">
                <div class="left-section">
                  <img
                    src="https://static.naukimg.com/s/0/0/i/role-collection.png"
                    class="role-img"
                    alt="naukri role-collection"
                  />
                  <p class="heading">Discover jobs across popular roles</p>
                  <p class="sub-heading">
                    Select a role and we'll show you relevant jobs for it!
                  </p>
                </div>
                <div class="right-section">
                  <div class="swiper-container roleColSwiperWidget premium-swiper-wrap swiper-container-initialized swiper-container-horizontal">
                    <div
                      class=" premium-collection swiper-wrapper"
                      style={{
                        transitionDuration: '0ms',
                        transform: 'translate3d(0px, 0px, 0px)',
                      }}
                    >
                      <div
                        class="swiper-slide tupple swiper-slide-active"
                        index="1"
                        style={{ width: '590px' }}
                      >
                        <div class="chip-container">
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/full-stack-developer-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Full Stack Developer{' '}
                                </a>
                                <p class="chip-count">
                                  25.3K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/mobile-application-development-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Mobile / App Developer{' '}
                                </a>
                                <p class="chip-count">
                                  1.8K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/front-end-developer-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Front End Developer{' '}
                                </a>
                                <p class="chip-count">
                                  2.3K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/devops-engineer-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  DevOps Engineer{' '}
                                </a>
                                <p class="chip-count">
                                  1.5K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/engineering-manager-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Engineering Manager{' '}
                                </a>
                                <p class="chip-count">
                                  1.5K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/technical-lead-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Technical Lead{' '}
                                </a>
                                <p class="chip-count">
                                  13.8K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="swiper-slide tupple swiper-slide-next"
                        index="2"
                      >
                        <div class="chip-container">
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/automation-test-engineer-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Automation Test Engineer{' '}
                                </a>
                                <p class="chip-count">
                                  1.7K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/cyber-security-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Cyber Security{' '}
                                </a>
                                <p class="chip-count">
                                  312 Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/technical-architect-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Technical Architect{' '}
                                </a>
                                <p class="chip-count">
                                  10.4K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/business-analyst-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Business Analyst{' '}
                                </a>
                                <p class="chip-count">
                                  6.3K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/data-scientist-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Data Scientist{' '}
                                </a>
                                <p class="chip-count">
                                  691 Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/technical-program-manager-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Program Manager - Technology / IT{' '}
                                </a>
                                <p class="chip-count">
                                  1.2K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="swiper-slide tupple"
                        index="3"
                        style={{ width: '590px' }}
                      >
                        <div class="chip-container">
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/product-manager-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Product Manager{' '}
                                </a>
                                <p class="chip-count">
                                  3.2K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/ui-ux-designer-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  UI / UX Designer{' '}
                                </a>
                                <p class="chip-count">
                                  785 Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/research-analyst-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Research Analyst{' '}
                                </a>
                                <p class="chip-count">
                                  356 Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/branch-manager-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Branch Manager{' '}
                                </a>
                                <p class="chip-count">
                                  841 Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/functional-consultant-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Functional Consultant{' '}
                                </a>
                                <p class="chip-count">
                                  3.7K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="chip-case">
                            <div class="chip">
                              <div class="chip-text">
                                <a
                                  href="https://www.naukri.com/chartered-accountant-jobs?src=popular_roles_homepage_srch"
                                  class="chip-heading"
                                >
                                  Chartered Accountant (CA){' '}
                                </a>
                                <p class="chip-count">
                                  1.7K+ Jobs
                                  <img
                                    class="arrow-icon"
                                    src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                                    alt="arrow-icon"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-pagination swiper-pagination-bullets">
                      <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                      <span class="swiper-pagination-bullet"></span>
                      <span class="swiper-pagination-bullet"></span>
                    </div>
                    <div
                      class="swiper-button-next"
                      tabindex="0"
                      role="button"
                      aria-label="Next slide"
                      aria-disabled="false"
                    ></div>
                    <div
                      class="swiper-button-prev swiper-button-disabled"
                      tabindex="0"
                      role="button"
                      aria-label="Previous slide"
                      aria-disabled="true"
                    ></div>
                    <span
                      class="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            class="wdgt-track-view"
            data-id="mainSection.inventory-3.role-collection-wdgt.v2"
          ></span>
        </div>
      </div>

      <Heading
        as="h5"
        textAlign={'center'}
        padding={'20px'}
        fontSize={'30px'}
        marginTop="30px"
      >
        Jobs you may be interested in
      </Heading>

      <Slider></Slider>

      <br />
      <br />
      <br />
      <div
        id="mainSection.inventory-4"
        style={{ width: '90%', margin: 'auto' }}
      >
        <div
          id="mainSection.inventory-4.naukri-ab-interview-wdgt.v0"
          class="naukri-wdgt naukri-ab-interview-wdgt naukri-js-wdgt"
          data-widget-name="naukri-ab-interview-wdgt"
          data-widget='{"widgetName":"naukri-ab-interview-wdgt","version":"v0","sectionName":"mainSection","widgetSequence":1,"pageName":"ni-desktop-homepage-v1","inventoryContext":{"sectionName":"mainSection","inventoryType":0,"pageName":"ni-desktop-homepage-v1","inventoryName":"inventory-4"},"tags":["t333"]}'
        >
          <div id="ab-interview-wdgt">
            <div class="ab-interview-wdgt">
              <div class="card-container" data-label="by Ambition Box">
                <div class="one">
                  <h3 class="heading">Prepare for your next interview</h3>
                  <div class="left-image">
                    <img
                      src="https://static.naukimg.com/s/0/0/i/ab-interview.png"
                      class="ab-img"
                      alt="naukri ab interview"
                    />
                  </div>
                </div>
                <div class="two">
                  <p class="card-heading">Interview questions by company</p>
                  <div class="chip">
                    <div class="chip-image">
                      <img
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png"
                        class="chip-image-dim"
                        alt="naulogo"
                      />
                    </div>
                    <div class="chip-text">
                      <div class="chip-heading-div">
                        <a
                          href="https://www.ambitionbox.com/interviews/amazon-interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                          class="chip-heading"
                        >
                          Amazon
                        </a>
                        <img
                          class="arrow-icon"
                          src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                          alt="arrow-icon"
                        />
                      </div>
                      <br />
                      <p class="chip-count">1.7K+ Interviews</p>
                    </div>
                  </div>
                  <div class="chip">
                    <div class="chip-image">
                      <img
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png"
                        class="chip-image-dim"
                        alt="naulogo"
                      />
                    </div>
                    <div class="chip-text">
                      <div class="chip-heading-div">
                        <a
                          href="https://www.ambitionbox.com/interviews/cognizant-interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                          class="chip-heading"
                        >
                          Cognizant
                        </a>
                        <img
                          class="arrow-icon"
                          src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                          alt="arrow-icon"
                        />
                      </div>
                      <br />
                      <p class="chip-count">1.6K+ Interviews</p>
                    </div>
                  </div>
                  <div class="chip">
                    <div class="chip-image">
                      <img
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png"
                        class="chip-image-dim"
                        alt="naulogo"
                      />
                    </div>
                    <div class="chip-text">
                      <div class="chip-heading-div">
                        <a
                          href="https://www.ambitionbox.com/interviews/tcs-interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                          class="chip-heading"
                        >
                          TCS
                        </a>
                        <img
                          class="arrow-icon"
                          src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                          alt="arrow-icon"
                        />
                      </div>
                      <br />
                      <p class="chip-count">2.5K+ Interviews</p>
                    </div>
                  </div>
                  <div class="chip">
                    <div class="chip-image">
                      <img
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png"
                        class="chip-image-dim"
                        alt="naulogo"
                      />
                    </div>
                    <div class="chip-text">
                      <div class="chip-heading-div">
                        <a
                          href="https://www.ambitionbox.com/interviews/flipkart-interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                          class="chip-heading"
                        >
                          Flipkart
                        </a>
                        <img
                          class="arrow-icon"
                          src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                          alt="arrow-icon"
                        />
                      </div>
                      <br />
                      <p class="chip-count">488 Interviews</p>
                    </div>
                  </div>
                  <div class="chip">
                    <div class="chip-image">
                      <img
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png"
                        class="chip-image-dim"
                        alt="naulogo"
                      />
                    </div>
                    <div class="chip-text">
                      <div class="chip-heading-div">
                        <a
                          href="https://www.ambitionbox.com/interviews/byjus-interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                          class="chip-heading"
                        >
                          Byjus
                        </a>
                        <img
                          class="arrow-icon"
                          src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                          alt="arrow-icon"
                        />
                      </div>
                      <br />
                      <p class="chip-count">816 Interviews</p>
                    </div>
                  </div>
                  <div class="chip">
                    <div class="chip-image">
                      <img
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png"
                        class="chip-image-dim"
                        alt="naulogo"
                      />
                    </div>
                    <div class="chip-text">
                      <div class="chip-heading-div">
                        <a
                          href="https://www.ambitionbox.com/interviews/accenture-interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                          class="chip-heading"
                        >
                          Accenture
                        </a>
                        <img
                          class="arrow-icon"
                          src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                          alt="arrow-icon"
                        />
                      </div>
                      <br />
                      <p class="chip-count">2K+ Interviews</p>
                    </div>
                  </div>
                  <div class="view-roles">
                    <a
                      class="view-more-text"
                      href="https://www.ambitionbox.com/interviews?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                    >
                      View all companies
                      <img
                        class="arrow-icon"
                        src="//static.naukimg.com/s/7/0/assets/images/src/widgets/ab-interview-wdgt/v6/assets/blueArrowImg.8a0acdaa.png"
                        alt="arrow-icon"
                      />
                    </a>
                  </div>
                </div>
                <div class="three">
                  <p class="card-heading">Interview questions by role</p>
                  <div>
                    <div class="section3">
                      <a
                        href="https://www.ambitionbox.com/profiles/software-engineer/interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                        class="role-headline"
                      >
                        Software Engineer &nbsp;
                      </a>
                      <p class="role-count"> (7.2K+ questions)</p>
                    </div>
                    <hr class="hrLine" />
                  </div>
                  <div>
                    <div class="section3">
                      <a
                        href="https://www.ambitionbox.com/profiles/business-analyst/interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                        class="role-headline"
                      >
                        Business Analyst &nbsp;
                      </a>
                      <p class="role-count"> (2.8K+ questions)</p>
                    </div>
                    <hr class="hrLine" />
                  </div>
                  <div>
                    <div class="section3">
                      <a
                        href="https://www.ambitionbox.com/profiles/consultant/interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                        class="role-headline"
                      >
                        Consultant &nbsp;
                      </a>
                      <p class="role-count"> (2.4K+ questions)</p>
                    </div>
                    <hr class="hrLine" />
                  </div>
                  <div>
                    <div class="section3">
                      <a
                        href="https://www.ambitionbox.com/profiles/financial-analyst/interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                        class="role-headline"
                      >
                        Financial Analyst &nbsp;
                      </a>
                      <p class="role-count"> (894 questions)</p>
                    </div>
                    <hr class="hrLine" />
                  </div>
                  <div>
                    <div class="section3">
                      <a
                        href="https://www.ambitionbox.com/profiles/sales-and-marketing/interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                        class="role-headline"
                      >
                        Sales &amp; Marketing &nbsp;
                      </a>
                      <p class="role-count"> (991 questions)</p>
                    </div>
                    <hr class="hrLine" />
                  </div>
                  <div>
                    <div class="section3">
                      <a
                        href="https://www.ambitionbox.com/profiles/quality-engineer/interview-questions?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                        class="role-headline"
                      >
                        Quality Engineer &nbsp;
                      </a>
                      <p class="role-count"> (1.3K+ questions)</p>
                    </div>
                  </div>
                  <div class="view-roles">
                    <a
                      class="view-more-text"
                      href="https://www.ambitionbox.com/interviews/profiles?utm_source=naukri&amp;utm_medium=desktop&amp;utm_campaign=nonlogged_homepage"
                    >
                      View all roles
                      <img
                        class="arrow-icon"
                        src="//static.naukimg.com/s/7/0/assets/images/src/widgets/ab-interview-wdgt/v6/assets/blueArrowImg.8a0acdaa.png"
                        alt="arrow-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            class="wdgt-track-view"
            data-id="mainSection.inventory-4.naukri-ab-interview-wdgt.v0"
          ></span>
        </div>
      </div>

      <Box
        width={'80%'}
        display={'flex'}
        margin={'auto'}
        background={'rgb(241,245,255)'}
        borderRadius={'25px'}
        marginTop={'5%'}
        marginBottom={'5%'}
        textAlign={'start'}
      >
        <Box padding={10} width={'70%'}>
          <Heading as="h3" fontSize={'30px'}>
            Stand out among recruiters
            <br /> with a video profile
          </Heading>
          <br />
          <Box width={'90%'} display={'flex'} marginBottom={'15px'}>
            <Box marginRight={'12%'} marginBottom={'15px'}>
              <p>{"Get real-time job updates & more!"}</p>
              <br />
              <Box
                display={'flex'}
                marginBottom={'15px'}
                border={'1px solid gray'}
                w={'100%'}
                borderRadius={'15px'}
                padding={'5px'}
                background={'white'}
              >
                <input
                  type="text"
                  placeholder="Enter mobile number..."
                  style={{ borderRadius: '16px' }}
                />
                <button
                  style={{
                    background: 'rgb(0,255,255)',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '20px',
                    width: '50%',
                  }}
                >
                  Get Link
                </button>
              </Box>
              <br />
              <Box display={'flex'} marginBottom={'15px'}>
                <Image
                  src={
                    'https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png'
                  }
                ></Image>
                <Image
                  src={
                    'https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png'
                  }
                ></Image>
              </Box>
            </Box>
            <Box>
              <Image
                src={
                  'https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg'
                }
                h={'60px'}
                w={'60px'}
              ></Image>
            </Box>
          </Box>
        </Box>
        <Box>
          <Image
            src={
              'https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroup_v4.png'
            }
          ></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage1;
