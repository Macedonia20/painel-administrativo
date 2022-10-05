import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from 'apexcharts';

import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import ('react-apexcharts'), {
    ssr: false,
})
export default function Dashboard() {

    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            foreColor: theme.colors.gray[300]
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        xaxis: {
         type: 'datetime',
         axiosBorder: {
             color: theme.colors.gray[600]
         },
         axisTicks: {
             color: theme.colors.gray[600]
         },
         categories: [
            '2022-05-14T00:00:00.000Z',
            '2022-05-15T00:00:00.000Z',
            '2022-05-16T00:00:00.000Z',
            '2022-05-17T00:00:00.000Z',
            '2022-05-18T00:00:00.000Z',
            '2022-05-19T00:00:00.000Z',
        ],
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.7,
                opacityTo: 0.3,
            },
        }

    } as const;
    const series = [
        {name: 'series', data: [35, 66, 78, 888, 900, 500]}
    ]
    return (
        <Flex direction="column" w="100vw" h="90h">
            <Header />
            <Flex w="100%" my="6" maxWidth={1300} mx="auto" px="6">
            <Sidebar />

            <SimpleGrid flex="1" gap="2" minChildWidth="320px" alignItems="flex-start">
                <Box
                height={200}
                  p="8"
                  bg="gray.800"
                  borderRadius={8}
                  pb="4"
                  >
                    <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                    <Chart options={options} series={series} type="area" height={160} />
                </Box>
                <Box
                height={200}
                  p="8"
                  bg="gray.800"
                  borderRadius={8}
                  pb="4"
                >
                    <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                    <Chart options={options} series={series} type="area" height={160} />

                </Box>

            </SimpleGrid>
            </Flex>
        </Flex>


    )
}