## Translations

ID | Default
------------ | -------------
COMPONENT_KIT.FRESHNESS_INDICATOR.DELAY | Delayed
COMPONENT_KIT.FRESHNESS_INDICATOR.NO_DELAY | Realtime
COMPONENT_KIT.FRESHNESS_INDICATOR.HOUR  | h
COMPONENT_KIT.FRESHNESS_INDICATOR.MINUTE | m
COMPONENT_KIT.FRESHNESS_INDICATOR.SECOND | s
COMPONENT_KIT.FRESHNESS_INDICATOR.NOT_ACTIVE | Close price
COMPONENT_KIT.FRESHNESS_INDICATOR.UPDATED | Updated

Realtime data:

    <FreshnessIndicator delay={0} timestamp={1} />

Delayed data:

    <FreshnessIndicator delay={60*60 + 60*2 + 3} timestamp={2} />

No active data update:

    <FreshnessIndicator delay={1} timestamp={3} notActive />
