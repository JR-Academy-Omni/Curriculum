import ComponentSlide from '../ComponentSlide';

export default function S08_Storage() {
	return <ComponentSlide tag="P09 · 组件 1" title="数据库与对象存储：小数据和大文件分开放" subtitle="问题：2 TB/天的视频塞满磁盘，元数据又需要随时查。"
		flow={[{ title: 'Web 服务', sub: '处理上传和查询' }, { title: '数据库', sub: '视频标题、所有者、状态', hot: true }, { title: '对象存储', sub: '原视频和转码成品', hot: true }]}
		what={<>数据库存结构化的小数据，支持按条件查询和事务。对象存储（如 S3）按文件存，容量几乎无限，按量付费。</>}
		solves={<>文件不再占服务器磁盘，服务器坏了数据也还在。SQL 适合关系清楚、要事务的数据；NoSQL 适合结构灵活、写入量极大的场景。</>}
		cost={<>多了两个要管的系统。数据库记录和对象存储里的文件可能对不上，要设计谁先写、谁后写。</>}
	/>;
}
