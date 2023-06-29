'use client';

const MapPeople = ({ imgUrl, placement }) => (
  <div className={`absolute ${placement} w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]`}>
    <img src={imgUrl} alt="people" className="w-full h-full" />
  </div>
);

export default MapPeople;
