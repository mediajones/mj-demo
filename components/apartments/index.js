import { SimpleGrid } from "@chakra-ui/react";
import Listing from "./listing";

export default function ApartmentList() {
  const apartments = [
    {
      tourId: "111",
      image:
        "https://images1.apartments.com/i2/5zTDPLl4RMpYqMdztYph1ILykgQgo3ng3YdX4otEAuo/110/fountain-lake-apartments-enid-ok-primary-photo.jpg",
      name: "Italy Park",
      price: 700,
      description: "Modern lakeview apartments",
      city: "Columbus",
      state: "MS",
      openings: true,
    },
    {
      tourId: "222",
      image:
        "https://www.crossbeaminvestments.com/wp-content/uploads/2015/04/HiddenLake-34.jpg",
      name: "Marr & Locke",
      price: 900,
      description: "Beautiful quiet neighborhood",
      city: "Hartford",
      state: "CT",
      openings: false,
    },
    {
      tourId: "333",
      image:
        "https://decorqeeny.com/wp-content/uploads/2019/03/10-Lovely-The-Highrise-Apartment-1.jpg",
      name: "Washington Cove",
      price: 550,
      description: "Comfortable living, affordable price",
      city: "Kansas City",
      state: "MO",
      openings: true,
    },
  ];
  // const [apartments, setApartments] = useState(initialApartments);

  return (
    <SimpleGrid columns={[1, 3]} spacing="20px" mb="5%">
      {apartments.map((apartment, index) => (
        <Listing key={index} details={apartment} />
      ))}
    </SimpleGrid>
  );
}
