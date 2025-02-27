import ChartArea from "@/pages/components/chart/view/chart-area";
import ChartBar from "@/pages/components/chart/view/chart-bar";
import ChartColumnStacked from "@/pages/components/chart/view/chart-column-Stacked";
import ChartColumnMultiple from "@/pages/components/chart/view/chart-column-multiple";
import ChartColumnNegative from "@/pages/components/chart/view/chart-column-negative";
import ChartColumnSingle from "@/pages/components/chart/view/chart-column-single";
import ChartDonut from "@/pages/components/chart/view/chart-donut";
import ChartLine from "@/pages/components/chart/view/chart-line";
import ChartMixed from "@/pages/components/chart/view/chart-mixed";
import ChartPie from "@/pages/components/chart/view/chart-pie";
import ChartRadar from "@/pages/components/chart/view/chart-radar";
import ChartRadial from "@/pages/components/chart/view/chart-radial";
import { Card, Col, Row, Space } from "antd";
import PieDonutChart from "./PieDonutChart";
import AreaDownload from "./area-download";
import TotalCard from "./total-card";

function Workbench() {
	return (
		<div className="p-2">
			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={8}>
					<TotalCard
						title="Total Active Users"
						increase
						count="18,765"
						percent="2.6%"
						chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87, 43]}
					/>
				</Col>

				<Col span={24} md={8}>
					<TotalCard
						title="Total Installed"
						increase
						count="4,876"
						percent="0.2%"
						chartData={[45, 52, 38, 24, 33, 26, 21, 20, 6]}
					/>
				</Col>

				<Col span={24} md={8}>
					<TotalCard
						title="Total Downloads"
						increase={false}
						count="678"
						percent="0.1%"
						chartData={[35, 41, 62, 42, 13, 18, 29, 37, 36]}
					/>
				</Col>
			</Row>

			<Row gutter={[16, 16]} className="mt-4" justify="center">
				<Col span={24} md={12} lg={8}>
					<PieDonutChart title="Operating System Installed" />
				</Col>
				<Col span={24} md={12} lg={16}>
					<AreaDownload />
				</Col>
			</Row>

			<Row gutter={[16, 16]} className="mt-8" justify="center">
				<Col span={24} lg={12} xl={16}>
					<Card title="Website Visits">
						<ChartMixed />
					</Card>
				</Col>
				<Col span={24} lg={12} xl={8}>
					<Card title="Current Visits">
						<ChartPie />
					</Card>
				</Col>
			</Row>
			<Row gutter={[16, 16]} justify="center">
				<Col span={23} lg={12}>
					<Card title="Area">
						<ChartArea />
					</Card>
				</Col>
				<Col span={23} lg={12}>
					<Card title="Line">
						<ChartLine />
					</Card>
				</Col>

				<Col span={23} lg={12}>
					<Card title="Column Single">
						<ChartColumnSingle />
					</Card>
				</Col>
				<Col span={23} lg={12}>
					<Card title="Column Multiple">
						<ChartColumnMultiple />
					</Card>
				</Col>

				<Col span={23} lg={12}>
					<Card title="Column Stacked">
						<ChartColumnStacked />
					</Card>
				</Col>
				<Col span={23} lg={12}>
					<Card title="Column Negative">
						<ChartColumnNegative />
					</Card>
				</Col>

				<Col span={23} lg={12}>
					<Card title="Bar">
						<ChartBar />
					</Card>
				</Col>
				<Col span={23} lg={12}>
					<Card title="Column Mixed">
						<ChartMixed />
					</Card>
				</Col>

				<Col span={24} lg={12}>
					<Card title="Pie">
						<ChartPie />
					</Card>
				</Col>
				<Col span={23} lg={12}>
					<Card title="Donut">
						<ChartDonut />
					</Card>
				</Col>

				<Col span={23} lg={12}>
					<Card title="Radial Bar">
						<ChartRadial />
					</Card>
				</Col>
				<Col span={23} lg={12}>
					<Card title="Radar">
						<ChartRadar />
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default Workbench;
