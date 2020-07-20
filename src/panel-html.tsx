class HTMLViewPanel extends PSRoomPanel {
	internalHTML: string;
	title: string;
	type: string = 'html';
	constructor() {
		super();
		this.title = 'Page';
		this.internalHTML = '<div class="pad"><h2>Page unavailable</h2></div>';
	}
	receiveLine(args: Args) {
		switch (args.shift()) {
			case 'pagehtml':
				this.internalHTML = BattleLog.sanitizeHTML(args.shift() || '');
				return this.render();
			case 'title':
				this.props.room.id = (args.shift() || '') as RoomID;
				break;
			case 'selectorhtml':
				break;
		}
	}
	render() {
		return <PSPanelWrapper room={this.props.room}>
		<div dangerouslySetInnerHTML={{__html: this.internalHTML}}></div>
		</PSPanelWrapper>;
	}
}

PS.roomTypes['html'] = {
	Component: HTMLViewPanel,
};
