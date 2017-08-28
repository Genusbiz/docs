# Analysis configuration

## Automatic error tracking and reporting
We use [Sentry](https://sentry.io) for real time error tracking and reporting. If an analysis crashes, a crash report is sent to Sentry, and the developers are notified immediately. This helps the developers monitor and fix crashes effectively.

### Disable Sentry
To disable Sentry (e.g. if your analysis runs in an environment without direct internet access), you must do the following:
* In the app server, create a file, 'config.json', on the installation root directory for analysis
* The content of 'config.json' should be the following:
	~~~~
	{
	"enableSentry": false
	}
	~~~~
