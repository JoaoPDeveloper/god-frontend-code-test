import { Card, CardContent, Flex, Row, Spacer, Text } from "vcc-ui";
import { Car } from "../types/car.interface";

interface CardProps {
  car: Car;
}
export function CarCard({ car }: CardProps) {
  return (
    <Card href={"/learn/" + car?.id}>
      <CardContent>
        <Text variant="bates">{car?.bodyType}</Text>
        <Flex>
          <Row>
        <Text variant="amundsen">{car?.modelName}</Text>
        <Text variant="bates" subStyle={"inline-link"}>{car?.modelType}</Text>
          </Row>
        </Flex>
        <Spacer />
        <Text> This is a is a link that will take you to volvocars.com</Text>
      </CardContent>
    </Card>
  );
}
