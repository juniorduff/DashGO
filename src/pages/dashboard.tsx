import { Header } from "../components/Header";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import { theme } from "../styles/theme";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-10T00:00:00.000Z",
      "2021-03-11T00:00:00.000Z",
      "2021-03-12T00:00:00.000Z",
      "2021-03-13T00:00:00.000Z",
      "2021-03-14T00:00:00.000Z",
      "2021-03-15T00:00:00.000Z",
      "2021-03-16T00:00:00.000Z",
      "2021-03-17T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: false,
      opacityFrom: 0.2,
      opacityTo: 0.3,
    },
  },
} as const;

const series = [
  {
    name: "series-1",
    data: [40, 30, 25, 60, 49, 60, 70, 91],
  },
];
export default function Dashboard() {
  return (
    <Flex direction={"column"} h={"100vh"}>
      <Header />
      <Flex w={"100%"} my={"6"} maxWidth={1400} mx={"auto"} px={"6"}>
        <Sidebar />

        <SimpleGrid
          flex={"1"}
          gap={"4"}
          minChildWidth={"320px"}
          alignItems={"flex-start"}
        >
          <Box p={"8"} bg={"gray.800"} borderRadius={8}>
            <Text fontSize={"lg"} mb={4}>
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type={"area"}></Chart>
          </Box>{" "}
          <Box p={"8"} bg={"gray.800"} borderRadius={8}>
            <Text fontSize={"lg"} mb={4}>
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type={"area"}></Chart>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
