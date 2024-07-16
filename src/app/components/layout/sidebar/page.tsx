import Image from "next/image";
import { Flex,  Link, Box, Container } from "@radix-ui/themes";
import { FaCalendarAlt } from "react-icons/fa";

import Menu from "./menu";


export default function Sidebar() {
    return (
        <Box  width={"100%"}>
            <Container py="20px" px={"20px"} style={{background:"#f5f5f5", minHeight:"100vh"}}>
                <Flex direction={"column"}>
                    {/* logo */}
                    <Flex direction="row" align="center" justify={"between"}>
                        <Link href="/">
                            <Image
                                priority={true}
                                src="/assets/svg/logo.svg"
                                alt="Logo"
                                width={60}
                                height={60}
                            />
                        </Link>
                    </Flex>
                    {/* sidebar menu */}
                    <Menu />
                </Flex>
                    
            </Container>
        </Box>

    );
}
