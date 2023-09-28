import Image from "next/image";
import { Card, CardContent, Flex, Link, Row, Spacer, Text } from "vcc-ui";
import styles from "../../public/css/CarCard.module.css";
import { Car } from "../types/car.interface";

interface CardProps {
  car: Car;
}
export function CarCard({ car }: CardProps) {
  return (
    <div className={styles.cardWrapper}>
      <Card href={"/learn/" + car?.id}>
        <CardContent>
          <Text variant="bates">{car?.bodyType}</Text>
          <Flex
            extend={{
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 10,
              flexDirection: "row",
            }}
          >
            <Text variant="amundsen">{car?.modelName}</Text>
            <Text variant="bates" subStyle={"inline-link"}>
              {car?.modelType}
            </Text>
          </Flex>
          <Spacer />
          <Image
            src={car.imageUrl}
            alt={car.modelName}
            width="250"
            height="250"
          />
          <Spacer />
          <Flex
            extend={{
              border: "1px solid grey",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Row>
              <Link href="https://www.volvocars.com/" arrow="right">
                SHOP
              </Link>
              <Link href="https://www.volvocars.com/" arrow="right">
                LEARN
              </Link>
            </Row>
          </Flex>
        </CardContent>
      </Card>
    </div>
  );
}
