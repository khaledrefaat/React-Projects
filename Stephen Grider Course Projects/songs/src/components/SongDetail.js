import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song, songs }) => {
	if (song) {
		return (
			<div>
				<h3>Details For: </h3>
				<p>
					{song.title}
					<br />
					{song.duration}
				</p>
			</div>
		);
	}
	return (
		<div>
			<h3>Details For: </h3>
			<p>
				{songs[0].title}
				<br />
				{songs[0].duration}
			</p>
		</div>
	);
};

const mapStateToProps = state => {
	return { song: state.selectedSong, songs: state.songs };
};

export default connect(mapStateToProps)(SongDetail);
