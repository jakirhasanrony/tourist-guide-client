import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Overview from './Overview';
import TourGuides from './TourGuides';
import OurPackages from '../OurPackages/OurPackages';


const TourismTravelSection = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <div className="mx-auto text-center md:w-4/12 my-5">
                <p className="text-gray-500 font-bold mb-2">Unveiling Unique Destinations and Insider Tips for Unforgettable Adventures</p>
                <h3 className="text-3xl font-bold uppercase border-y-4 py-4">Discovering Hidden Gems: Your Ultimate Travel Companion</h3>
            </div>
            <div className='mx-auto flex justify-center items-center text-center bg-gray-100  rounded-lg shadow-lg p-6'>

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet Our Tour Guides</Tab>
                    </TabList>
                    <TabPanel>
                        <Overview></Overview>
                    </TabPanel>
                    <TabPanel>
                        <OurPackages></OurPackages>
                    </TabPanel>
                    <TabPanel>
                        <TourGuides></TourGuides>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TourismTravelSection;