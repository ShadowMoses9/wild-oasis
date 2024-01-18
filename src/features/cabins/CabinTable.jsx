import { useCabins } from "./useCabins";
import { useSearchParams } from "react-router-dom";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, data } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!data.length) return <Empty resource="bookings" />;

  //1) FILTER
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;

  if (filterValue === "all") filteredCabins = data;
  if (filterValue === "no-discount")
    filteredCabins = data.filter((cabins) => cabins.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = data.filter((cabins) => cabins.discount > 0);

  //2)SORT
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
