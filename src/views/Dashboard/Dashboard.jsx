import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  InfoOutline,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
Documentos
  componentDidMount() {
    fetch('http://localhost:5000/upload', 
    { headers: { 'Authorization': 'whatever-you-want' }})
    .then(response => response.json())
    .then(data => this.setState({ contacts: data.contacts }))
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact =>
        <div key={contact.id}>
            <h1>{contact.name}</h1>
        </div>
        )}

        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Accessibility}
              iconColor="orange"
              title="Total de Cadastros"
              description="7366"
              small="usuarios"
              statIcon={DateRange}
              statText="Total"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Accessibility}
              iconColor="green"
              title="Total de cadastros mensais"
              description="166"
              small="usuarios"
              statIcon={DateRange}
              statText="Neste mês"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={InfoOutline}
              iconColor="red"
              title="Negócios"
              description="2"
              small="fechados"
              statIcon={LocalOffer}
              statText="Neste mês"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Accessibility}
              iconColor="blue"
              title=""
              description="732"
              small="interações"
              statIcon={Update}
              statText="Neste mês"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              }
              chartColor="green"
              title="Ultima semana - cadastros"
              text={
                <span>
                  <span className={this.props.classes.successText}>
                    <ArrowUpward
                      className={this.props.classes.upArrowCardCategory}
                    />{" "}
                    7%
                  </span>{" "}
                  de aumento de cadastros.
                </span>
              }
              statIcon={AccessTime}
              statText="atualizado em tempo real"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              }
              chartColor="orange"
              title="Fluxo de interações no ano"
              text="Interações dentro da plataforma"
              statIcon={AccessTime}
              statText="Atualizado diariamente"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="purple"
              cardTitle="Cadastros"
              cardSubtitle="Ultimos cadastros realizados no mês"
              content={
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Data", "Novos cadastros", "Acessos", "Interações", "Negócios"]}
                  tableData={[
                    ["01/05/2018", "6", "33", "23", "0"],
                    ["02/05/2018", "12", "104", "59", "1"],
                    ["03/05/2018", "23", "107", "83", "1"],
                    ["04/05/2018", "9", "74", "67", "0"],
                    ["05/05/2018", "1", "26", "10", "0"],
                    ["06/05/2018", "3", "18", "13", "0"],
                    ["07/05/2018", "12", "107", "87", "0"],
                    ["08/05/2018", "11", "109", "62", "0"],
                    ["09/05/2018", "20", "140", "95", "0"],
                    ["10/05/2018", "30", "125", "80", "0"],
                    ["11/05/2018", "11", "114", "62", "0"],
                    ["12/05/2018", "1", "22", "4", "0"],
                    ["13/05/2018", "0", "6", "1", "0"],
                    ["14/05/2018", "27", "132", "86", "0"]
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
