import aiEngineer from '../../assets/roles/ai-engineer.webp?inline';
import fde from '../../assets/roles/fde.webp?inline';
import aiProductManager from '../../assets/roles/ai-product-manager.webp?inline';
import itSales from '../../assets/roles/it-sales.webp?inline';
import { colors } from '../kit';
import { Slide } from '../ui';
import '../../styles/role-photos.css';

const roles = [
	{ title: 'AI Engineer', photo: aiEngineer, description: '工程师在工作台查看代码和评估图表' },
	{ title: 'FDE', photo: fde, description: '工程师与客户在运营现场讨论工作流' },
	{ title: 'AI Product Manager', photo: aiProductManager, description: '产品经理与同事在设计工作室查看原型' },
	{ title: 'IT Sales', photo: itSales, description: '科技销售在会议室和客户讨论产品' },
];

export default function S05_Roles() {
	return <Slide bg={colors.dark} style={{ position: 'relative', isolation: 'isolate' }}>
		<div className="role-photo-backdrop" aria-hidden="true" />
		<div className="role-photo-layout">
			<h1 className="role-photo-heading">
				<span className="role-photo-year">2027</span>
				<span className="role-photo-topic"> 年值得关注的<span>四个方向</span></span>
			</h1>
			<div className="role-photo-collection">
				{roles.map(({ title, photo, description }) => (
					<article className="role-photo-card" key={title}>
						<div className="role-photo-window">
							<img src={photo} alt={description} />
						</div>
						<h2>{title}</h2>
					</article>
				))}
			</div>
		</div>
	</Slide>;
}
